import { MdTextFields } from "react-icons/md";
import {
  ElementsType,
  FormElement,
  FormElementInstance,
} from "../form-elements";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

const type: ElementsType = "TextField";

const extraAttributes = {
  label: "Text Field",
  placeholder: "Value here...",
  required: false,
  helperText: "Helper Text",
};

export const TextFieldFormElement: FormElement = {
  type,
  construct: (id: string) => ({
    id,
    type,
    extraAttributes,
  }),
  designerBtnElement: {
    icon: MdTextFields,
    label: "Text Field",
  },
  designComponent: DesignComponent,
  formComponent: () => <div>Form Component</div>,
  propertiesComponent: () => <div>Properties Component</div>,
};
type CustomInstance = FormElementInstance & {
  extraAttributes: typeof extraAttributes;
};

function DesignComponent({
  elementInstance,
}: {
  elementInstance: FormElementInstance;
}) {
  const element = elementInstance as CustomInstance;
  const { label, placeholder, required, helperText } = element.extraAttributes;
  return (
    <div className="flex flex-col gap-2 w-full">
      <Label>
        {label}
        {required && <span className="text-red-500">*</span>}
      </Label>
      <Input readOnly disabled placeholder={placeholder} />
      {helperText ? (
        <p className="text-[0.8rem] text-muted-foreground">{helperText}</p>
      ) : null}
    </div>
  );
}
