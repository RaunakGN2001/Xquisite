import React from 'react'

import { cn } from "@/lib/utils";

const Button = (({ className, children, disabled, type = 'button', ...props }, ref) => {
    return (
        <button className={cn(`w-auto rounded-full bg-black border-transparent px-5 py-3 disabled:cursor-not-allowed disabled:opacity-50 text-white font-semibold hover:opacity-75 transition`, className)} disabled={disabled} ref={ref} {...props}>
            {children}
        </button>
    );
});

export default React.forwardRef(Button);