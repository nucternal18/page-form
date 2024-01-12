import { MdTextFields } from "react-icons/md";
import { ElementsType, FormElement } from "../form-elements";

const type: ElementsType = 'TextField'

export const TextFieldFormElement: FormElement = {
    type,
    construct: (id: string) => ({
        id,
        type,
        extraAttributes: {
            label: 'Text Field',
            placeholder: 'Value here...',
            required: false,
            helperText: 'Helper Text',
        }
    }),
    designerBtnElement: {
        icon: MdTextFields,
        label: 'Text Field'
    },
    designComponent: () => <div className="text-white">Designer Component</div>,
    formComponent: () => <div>Form Component</div>,
    propertiesComponent: () => <div>Properties Component</div>
}