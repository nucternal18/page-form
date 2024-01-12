import { TextFieldFormElement } from "./fields/text-field"

export type ElementsType = 'TextField'

export type FormElement = {
    type: ElementsType
    construct: (id: string) => FormElementInstance
    designerBtnElement: {
        icon: React.ReactElement;
        label: string;
    }
    designComponent: React.FC
    formComponent: React.FC
    propertiesComponent: React.FC
}

export type FormElementInstance = {
    id: string
    type: ElementsType
   extraAttributes: Record<string, any>
}

type FormElementType = {
    [key in ElementsType]: FormElement
}

export const FormElements: FormElementType = {
    TextField: TextFieldFormElement
}