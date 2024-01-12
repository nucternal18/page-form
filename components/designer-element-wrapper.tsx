import { FormElementInstance, FormElements } from "./form-elements";

export function DesignerElementWrapper({element}: { element: FormElementInstance }) {
    const DesignComponent = FormElements[element.type].designComponent;

    return <DesignComponent />
  
}  