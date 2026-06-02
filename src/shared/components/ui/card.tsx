"use client";

import * as React from "react";
import { cn } from "../../lib/utils";

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "relative overflow-hidden",
      "bg-gradient-to-br from-parchment-50 via-parchment-100 to-parchment-50",
      "border-2 border-gold-400 shadow-ornate",
      "hover:shadow-gold transition-all duration-500",
      "group",
      className
    )}
    {...props}
  >
    {/* Multi-layer ornate border */}
    <div className="absolute inset-0 border-2 border-gold-300 pointer-events-none" />
    <div className="absolute inset-1 border border-gold-200 pointer-events-none" />
    
    {/* Corner ornaments - picture frame style */}
    <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-gold-500" />
    <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-gold-500" />
    <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-gold-500" />
    <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-gold-500" />
    
    {/* Inner parchment texture */}
    <div 
      className="absolute inset-0 pointer-events-none opacity-20"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF77' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}
    />
  </div>
));
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-2 p-6 pb-4 relative z-10", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-xl font-bold leading-none tracking-wide font-cinzel text-marble-800",
      "group-hover:text-gold-600 transition-colors duration-300",
      className
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm font-garamond text-marble-600 italic", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-2 relative z-10", className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-2 relative z-10", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };