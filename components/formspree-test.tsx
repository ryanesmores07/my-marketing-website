"use client";

import { useForm, ValidationError } from "@formspree/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const FormspreeTest = () => {
  const [state, handleSubmit] = useForm("manogljy");

  if (state.succeeded) {
    return (
      <p className="text-green-600">
        Thanks for testing! Form is working correctly.
      </p>
    );
  }

  return (
    <div className="p-4 border rounded-lg">
      <h3 className="text-lg font-semibold mb-4">Formspree Test</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email
          </label>
          <Input
            id="email"
            type="email"
            name="email"
            placeholder="test@example.com"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1">
            Test Message
          </label>
          <Textarea
            id="message"
            name="message"
            placeholder="This is a test message"
            required
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>

        <Button type="submit" disabled={state.submitting}>
          {state.submitting ? "Sending..." : "Send Test"}
        </Button>

        <ValidationError errors={state.errors} />
      </form>
    </div>
  );
};
