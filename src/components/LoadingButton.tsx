"use client";
import { Loader2 } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";

interface LoadingbuttonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading: boolean;
}
export default function Loadingbutton({
  children,
  loading,
  ...props
}: LoadingbuttonProps) {
  return (
    <Button {...props} type="submit" disabled={props.disabled || loading}>
      <span className="flex items-center justify-center gap-1.5">
        {loading && <Loader2 size={16} className="animate-spin" />}
        {children}
      </span>
    </Button>
  );
}
