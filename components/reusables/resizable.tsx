import React, { useState, useEffect } from "react";
import {
  ResizableHandle,
  ResizablePanelGroup,
  ResizablePanel,
} from "../ui/resizable";
import Sidebar from "../Sidebar/Sidebar";


function ResizableComp({ children }: any) {

  return (
    <div className="h-full overflow-auto">
      <ResizablePanelGroup
        direction="horizontal"
        className="rounded-lg border"
      >
        <ResizablePanel defaultSize={25} maxSize={40}>
          <Sidebar />
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={75}>
          {children}
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}

export default ResizableComp;
