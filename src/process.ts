import { ComponentInfo, ProcessedFile, PropertyControl, PropertyControls } from "./types"
import { upperCaseFirstLetter } from "./utils"

/** Generates a component name and property controls */
export function convert(comp: ComponentInfo) {
    comp.componentName = `System.${comp.name}`
    comp.framerName = comp.name

    comp.propertyControls = new PropertyControls()
    if (comp.propsTypeInfo && comp.propsTypeInfo.properties) {
        for (const prop of comp.propsTypeInfo.properties) {
            let pc = new PropertyControl({ name: prop.name })
            pc.doc = prop.doc
            pc.title = upperCaseFirstLetter(pc.name)
            const meType = prop.type
            if (!meType) {
                console.log("Skipping PropertyControl for", prop.name)
                continue
            }
            let type: string
            if (meType.isEnum) {
                type = "ControlType.Enum"
                pc.options = meType.possibleValues
                pc.optionTitles = pc.options.map(t => upperCaseFirstLetter(String(t)))
            } else if (meType.name == "string") {
                type = "ControlType.String"
            } else if (meType.name == "boolean") {
                type = "ControlType.Boolean"
            } else {
                console.log("Skipping PropertyControl for", prop.name)
                continue
            }
            pc.type = type
            comp.propertyControls.add(pc)
        }
    }
}

/** Emits the code of all components found in a processed file */
export function generateFile(analyzedFile: ProcessedFile): string {
    const sb = []
    for (const comp of analyzedFile.components) {
        sb.push(generate(comp))
    }
    return sb.join("")
}

/** Emits the code for a framer component */
export function generate(comp: ComponentInfo): string {
    const sb = []
    const { componentName, framerName, propertyControls } = comp
    sb.push(`
    import * as React from "react"
    import * as System from "../../design-system"
    import { ControlType, PropertyControls } from "framer"
    
    type Props = ${componentName}Props & {
      width: number
      height: number
    }
    
    export class ${framerName} extends React.Component<Props> {
      render() {
        return <${componentName} {...this.props} />
      }
    
      static defaultProps: Props = {
        width: 150,
        height: 50,
      }
    
      static propertyControls: PropertyControls<Props> = ${propertyControls.toJS()}
    }
    `)
    return sb.join("")
}
