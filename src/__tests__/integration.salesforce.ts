import { analyzePlainJavaScript } from "../analyze"
import { findFilesAtImportPath, indexBy } from "../utils"

describe("integration-test", () => {
    test("salesforce lightning", async () => {
        const importPath = `integration-test-data/@salesforce/design-system-react/node_modules/@salesforce/design-system-react/components`
        const files = findFilesAtImportPath(importPath)
        const components = await analyzePlainJavaScript(files)

        const componentNames = components.map(comp => comp.name)

        expect(componentNames).toEqual([
            "Accordion",
            "AccordionPanel",
            "AlertContainer",
            "Alert",
            "AppLauncherExpandableSection",
            "AppLauncher",
            "AppLauncherLink",
            "AppLauncherSection",
            "AppLauncherTile",
            "Avatar",
            "Badge",
            "BrandBand",
            "Breadcrumb",
            "Breadcrumb",
            "BuilderHeader",
            "BuilderHeaderMisc",
            "BuilderHeaderNavDropdown",
            "BuilderHeaderNavLink",
            "BuilderHeaderNav",
            "BuilderHeaderToolbar",
            "ButtonGroup",
            "ButtonStateful",
            "Button",
            "CardEmpty",
            "Filter",
            "Card",
            "CardBody",
            "CardFooter",
            "CardHeader",
            "Carousel",
            "AutoplayButton",
            "CarouselIndicators",
            "CarouselItem",
            "previousNextCarouselNavigator",
            "Checkbox",
            "ColorPicker",
            "CustomColorForm",
            "CustomColor",
            "HsvColor",
            "SwatchOption",
            "SwatchPicker",
            "Swatch",
            "Combobox",
            "Combobox",
            "Menu",
            "DataTableCell",
            "DataTableColumn",
            "DataTableHighlightCell",
            "DataTable",
            "CellFixed",
            "DataTableHead",
            "DataTableHeaderCell",
            "DataTableRow",
            "DataTableRowActions",
            "Datepicker",
            "Datepicker",
            "DatepickerCalendarWrapper",
            "DatepickerCalendar",
            "DatepickerCalendarDay",
            "DatepickerMonthNavigation",
            "DatepickerWeek",
            "DatepickerYearSelector",
            "DynamicIcon",
            "ExpandableSection",
            "ExpressionCondition",
            "ExpressionFormula",
            "ExpressionGroup",
            "Expression",
            "File",
            "Files",
            "MoreFiles",
            "FileActions",
            "FileFigure",
            "Filter",
            "OldCheckbox",
            "Input",
            "InlineEdit",
            "Search",
            "Radio",
            "Textarea",
            "GlobalHeaderButton",
            "GlobalHeaderDropdown",
            "GlobalHeaderFavorites",
            "GlobalHeaderHelp",
            "GlobalHeader",
            "GlobalHeaderNotifications",
            "GlobalHeaderDropdownTrigger",
            "GlobalHeaderProfile",
            "GlobalHeaderSearch",
            "GlobalHeaderSetup",
            "GlobalHeaderTask",
            "GlobalNavigationButton",
            "GlobalNavigationDropdownTrigger",
            "GlobalNavigationBarDropdown",
            "GlobalNavigationBar",
            "GlobalNavigationBarLabel",
            "GlobalNavigationBarLink",
            "Region",
            "Grid",
            "IconSettings",
            "ButtonIcon",
            "Icon",
            "InputIcon",
            "Illustration",
            "Input",
            "InnerInput",
            "Search",
            "DefaultFooter",
            "DefaultHeader",
            "SLDSLookup",
            "DefaultFooter",
            "DefaultSectionDivider",
            "DefaultHeader",
            "SLDSLookup",
            "DefaultHeader",
            "DefaultFooter",
            "DefaultSectionDivider",
            "Menu",
            "Item",
            "Item",
            "Menu",
            "DefaultSectionDivider",
            "Map",
            "MediaObject",
            "Trigger",
            "MenuDropdown",
            "MenuDropdown",
            "ListItem",
            "ListItemLabel",
            "ListItemLabel",
            "ListItem",
            "List",
            "SLDSMenuPicklist",
            "ListItemLabel",
            "Modal",
            "Manager",
            "VerticalNavigation",
            "Notification",
            "Control",
            "PageHeader",
            "Info",
            "Title",
            "DetailRow",
            "DetailBlock",
            "Base",
            "Controls",
            "DetailBlock",
            "DetailRow",
            "Info",
            "Label",
            "ObjectHome",
            "RecordHome",
            "RelatedList",
            "Title",
            "PanelFilterGroup",
            "PanelFilterListHeading",
            "PanelFilterList",
            "PanelFilterFooter",
            "PanelFilterHeader",
            "Panel",
            "PillContainer",
            "SelectedListBox",
            "Pill",
            "Tooltip",
            "EditDialog",
            "Popover",
            "Popover",
            "ProgressBar",
            "ProgressIndicator",
            "ProgressBar",
            "Progress",
            "StepVertical",
            "Step",
            "ProgressRing",
            "ProgressRingShape",
            "RadioButtonGroup",
            "Radio",
            "RadioGroup",
            "Radio",
            "Radio",
            "ScopedNotification",
            "SetupAssistant",
            "Step",
            "Slider",
            "Spinner",
            "SplitViewHeader",
            "SplitView",
            "SplitViewListbox",
            "SplitViewListItemContent",
            "SplitViewToggleButton",
            "Tabs",
            "Panel",
            "Panel",
            "TabPanel",
            "Tab",
            "TabsList",
            "Textarea",
            "Timepicker",
            "TimepickerDropdownTrigger",
            "ToastContainer",
            "Toast",
            "Tooltip",
            "FieldLevelHelpTooltip",
            "Tree",
            "Branch",
            "Item",
            "RenderBranch",
            "renderInitialNode",
            "TrialBarButton",
            "TrialBarDropdown",
            "TrialBar",
            "DeprecatedWarning",
            "Dialog",
            "Portal",
            "Highlighter",
            "List",
            "ListItemLabel",
            "ListItem",
            "Pill",
            "TextTruncate",
            "UtilityIcon",
            "Svg",
            "VerticalNavigation",
            "Item",
            "VisualPicker",
            "VisualPickerLink",
            "WelcomeMat",
            "InfoBadge",
            "Tile",
        ])

        const { Button, Badge, Input, Textarea } = indexBy(components, c => c.name)

        expect(Button.propTypes.filter(p => p.type !== "unsupported")).toStrictEqual([
            {
                name: "className",
                type: "string",
            },
            {
                defaultValue: false,
                name: "disabled",
                type: "boolean",
            },
            {
                defaultValue: false,
                name: "hint",
                type: "boolean",
            },

            {
                name: "iconClassName",
                type: "string",
            },
            {
                name: "iconName",
                type: "string",
            },
            {
                name: "iconPath",
                type: "string",
            },
            {
                name: "iconPosition",
                possibleValues: ["left", "right"],
                type: "enum",
            },
            {
                defaultValue: "medium",
                name: "iconSize",
                possibleValues: ["x-small", "small", "medium", "large"],
                type: "enum",
            },
            {
                name: "iconVariant",
                possibleValues: ["bare", "container", "border", "border-filled", "brand", "more", "global-header"],
                type: "enum",
            },
            {
                name: "id",
                type: "string",
            },
            {
                name: "inverse",
                type: "boolean",
            },
            {
                name: "label",
                type: "string",
            },

            {
                defaultValue: false,
                name: "responsive",
                type: "boolean",
            },
            {
                name: "tabIndex",
                type: "string",
            },
            {
                defaultValue: "button",
                name: "type",
                possibleValues: ["reset", "submit", "button"],
                type: "enum",
            },
            {
                name: "title",
                type: "string",
            },

            {
                defaultValue: "neutral",
                name: "variant",
                possibleValues: [
                    "base",
                    "link",
                    "neutral",
                    "brand",
                    "outline-brand",
                    "destructive",
                    "success",
                    "text-destructive",
                    "icon",
                ],
                type: "enum",
            },
        ])

        expect(Input.propTypes.filter(p => p.type !== "unsupported")).toEqual([
            {
                name: "aria-activedescendant",
                type: "string",
            },
            {
                name: "aria-autocomplete",
                type: "string",
            },
            {
                name: "aria-controls",
                type: "string",
            },
            {
                name: "aria-describedby",
                type: "string",
            },
            {
                name: "aria-expanded",
                type: "boolean",
            },
            {
                name: "aria-haspopup",
                type: "boolean",
            },
            {
                name: "aria-labelledby",
                type: "string",
            },
            {
                name: "aria-owns",
                type: "string",
            },
            {
                name: "aria-required",
                type: "boolean",
            },
            {
                name: "autoComplete",
                type: "string",
            },
            {
                name: "className",
                type: "string",
            },
            {
                name: "defaultValue",
                type: "string",
            },
            {
                name: "disabled",
                type: "boolean",
            },
            {
                name: "errorText",
                type: "string",
            },

            {
                name: "fixedTextLeft",
                type: "string",
            },
            {
                name: "fixedTextRight",
                type: "string",
            },
            {
                name: "hasSpinner",
                type: "boolean",
            },
            {
                name: "id",
                type: "string",
            },
            {
                name: "inlineHelpText",
                type: "string",
            },
            {
                name: "isStatic",
                type: "boolean",
            },
            {
                name: "label",
                type: "string",
            },
            {
                name: "placeholder",
                type: "string",
            },
            {
                name: "minLength",
                type: "string",
            },
            {
                name: "minValue",
                type: "number",
            },
            {
                name: "maxLength",
                type: "string",
            },
            {
                name: "maxValue",
                type: "number",
            },
            {
                name: "name",
                type: "string",
            },
            {
                name: "readOnly",
                type: "boolean",
            },
            {
                name: "required",
                type: "boolean",
            },
            {
                name: "role",
                type: "string",
            },
            {
                name: "step",
                type: "number",
            },
            {
                defaultValue: "text",
                name: "type",
                possibleValues: [
                    "text",
                    "password",
                    "datetime",
                    "datetime-local",
                    "date",
                    "month",
                    "time",
                    "week",
                    "number",
                    "email",
                    "url",
                    "search",
                    "tel",
                    "color",
                ],
                type: "enum",
            },
            {
                name: "value",
                type: "string",
            },
            {
                name: "variant",
                possibleValues: ["base", "counter"],
                type: "enum",
            },
        ])

        expect(Badge).toEqual({
            name: "Badge",
            propTypes: [
                {
                    name: "className",
                    type: "string",
                },
                {
                    name: "id",
                    type: "string",
                },
                {
                    name: "style",
                    type: "unsupported",
                },
                {
                    defaultValue: "default",
                    name: "color",
                    possibleValues: ["default", "inverse", "light"],
                    type: "enum",
                },
                {
                    defaultValue: "left",
                    name: "iconAlignment",
                    possibleValues: ["left", "right"],
                    type: "enum",
                },
                {
                    name: "content",
                    type: "string",
                },
            ],
        })

        expect(Textarea.propTypes.filter(p => p.type !== "unsupported")).toEqual([
            {
                name: "aria-activedescendant",
                type: "string",
            },
            {
                name: "aria-autocomplete",
                type: "string",
            },
            {
                name: "aria-controls",
                type: "string",
            },
            {
                name: "aria-describedby",
                type: "string",
            },
            {
                name: "aria-expanded",
                type: "boolean",
            },
            {
                name: "aria-haspopup",
                type: "boolean",
            },
            {
                name: "aria-labelledby",
                type: "string",
            },
            {
                name: "aria-owns",
                type: "string",
            },
            {
                name: "aria-required",
                type: "boolean",
            },
            {
                name: "autoFocus",
                type: "boolean",
            },
            {
                name: "className",
                type: "string",
            },
            {
                name: "classNameContainer",
                type: "string",
            },
            {
                name: "disabled",
                type: "boolean",
            },
            {
                name: "errorText",
                type: "string",
            },
            {
                name: "id",
                type: "string",
            },
            {
                name: "label",
                type: "string",
            },

            {
                name: "maxLength",
                type: "string",
            },
            {
                name: "name",
                type: "string",
            },
            {
                name: "placeholder",
                type: "string",
            },
            {
                name: "required",
                type: "boolean",
            },
            {
                name: "value",
                type: "string",
            },
            {
                name: "defaultValue",
                type: "string",
            },
            {
                name: "wrap",
                possibleValues: ["soft", "hard"],
                type: "enum",
            },
        ])
    })
})
