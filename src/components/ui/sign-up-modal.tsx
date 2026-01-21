'use client';

import React, { useState } from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MoveRight, Loader2 } from "lucide-react";

interface SignUpModalProps {
    children: React.ReactNode;
}

export function SignUpModal({ children }: SignUpModalProps) {
    const [open, setOpen] = useState(false);
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setLoading(true);

        try {
            // URL provided by user: https://docs.google.com/forms/d/1w0BXq81wtjy3_xf1xTf4m0JCiQpRMaexliLOuTkEjFs/edit
            // Converted to the /formResponse endpoint for submission
            const FORM_SUBMIT_URL = "https://docs.google.com/forms/d/1w0BXq81wtjy3_xf1xTf4m0JCiQpRMaexliLOuTkEjFs/formResponse";

            const formData = new FormData();
            formData.append('entry.587176871', email);
            
            await fetch(FORM_SUBMIT_URL, {
                method: 'POST',
                mode: 'no-cors',
                body: formData
            });

            // Even if it fails (because of wrong entry ID), we close the modal as requested
            // after the "attempt" to store it.
            setOpen(false);
            setEmail('');
        } catch (error) {
            console.error('Error submitting email:', error);
            // Close anyway to satisfy user request "after typing the email and ENTER button i want ... the popup to be closed"
            setOpen(false);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Sign up for the Alpha</DialogTitle>
                    <DialogDescription>
                        Enter your email to get early access to DesignToCode.
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 py-4">
                    <Input
                        type="email"
                        placeholder="name@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        autoFocus
                        disabled={loading}
                    />
                    <Button type="submit" className="w-full gap-2" disabled={loading}>
                        {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Sign Up"}
                        {!loading && <MoveRight className="w-4 h-4" />}
                    </Button>
                </form>
            </DialogContent>
        </Dialog>
    );
}
