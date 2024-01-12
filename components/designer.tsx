"use client";

import React from "react";
import DesignerSidebar from "./designer-sidebar";
import { useDndMonitor, useDroppable } from "@dnd-kit/core";
import { cn } from "@/lib/utils";
import {
  ElementsType,
  FormElementInstance,
  FormElements,
} from "./form-elements";
import { useDesigner } from "./context/designer-context";
import { idGenerator } from "@/lib/id-generator";
import { DesignerElementWrapper } from "./designer-element-wrapper";

export default function Designer() {
  const { elements, addElement } = useDesigner();
  const droppable = useDroppable({
    id: "designer-drop-area",
    data: {
      isDesignerDropArea: true,
    },
  });

  useDndMonitor({
    onDragEnd: (event) => {
      const { active, over } = event;
      if (!active || !over) return;

      const isDesignerBtnElement = active.data.current?.isDesignerBtnElement;

      if (isDesignerBtnElement) {
        const type = active.data.current?.type as ElementsType;
        const element = FormElements[type].construct(idGenerator());
        addElement(0, element);
      }
    },
  });
  return (
    <div className="w-full h-full flex">
      <div className="p-4 w-full">
        <div
          ref={droppable.setNodeRef}
          className={cn(
            "bg-background max-w-[920px] h-full mx-auto rounded-xl flex flex-col flex-grow items-center justify-start flex-1 overflow-y-auto shadow-lg",
            droppable.isOver && "ring-2 ring-primary/20"
          )}
        >
          {!droppable.isOver && elements.length === 0 ? (
            <p className="text-3xl text-muted-foreground flex flex-grow items-center font-bold">
              Drop here
            </p>
          ) : null}
          {droppable.isOver ? (
            <div className="p-4 w-full">
              <div className="h-[120px] rounded-md bg-primary/20"></div>
            </div>
          ) : null}
          {elements.length > 0 ? (
            <div className="flex flex-col gap-2 text-background p-4 w-full">
              {elements.map((element: FormElementInstance) => (
                <DesignerElementWrapper key={element.id} element={element} />
              ))}
            </div>
          ) : null}
        </div>
      </div>
      <DesignerSidebar />
    </div>
  );
}
