import React from "react";
import {
  ResizableHandle,
  ResizablePanelGroup,
  ResizablePanel,
} from "../ui/resizable";
import Sidebar from "../Sidebar/Sidebar";


function ResizableComp({children}: any) {
  return (
    <div>
      <ResizablePanelGroup
        direction="horizontal"
        className="rounded-lg border"
      >
        <ResizablePanel defaultSize={20}>
          <Sidebar />
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={80}>
            {children}
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}

export default ResizableComp;
