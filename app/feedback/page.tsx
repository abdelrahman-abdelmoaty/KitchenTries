"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function FeedbackPage() {
  return (
    <div className="container mx-auto px-4 py-8 mt-16 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Feedback & Suggestions</h1>
        <p className="text-muted-foreground">
          Help us improve KitchenTries with your feedback
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <Card className="p-6">
          <div className="text-center">
            <h2 className="text-xl font-semibold mb-2">Report an Issue</h2>
            <p className="text-sm text-muted-foreground">
              Found a bug or having problems? Let us know!
            </p>
            <Button className="mt-4 bg-emerald-600 hover:bg-emerald-700">
              Report Issue
            </Button>
          </div>
        </Card>

        <Card className="p-6">
          <div className="text-center">
            <h2 className="text-xl font-semibold mb-2">Feature Request</h2>
            <p className="text-sm text-muted-foreground">
              Have an idea for a new feature? Share it with us!
            </p>
            <Button className="mt-4 bg-emerald-600 hover:bg-emerald-700">
              Suggest Feature
            </Button>
          </div>
        </Card>
      </div>

      <Card className="p-6">
        <h2 className="text-2xl font-semibold mb-6">Submit Feedback</h2>
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">
              Feedback Type
            </label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select type of feedback" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="bug">Bug Report</SelectItem>
                <SelectItem value="feature">Feature Request</SelectItem>
                <SelectItem value="improvement">Suggestion</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Your Feedback
            </label>
            <Textarea
              placeholder="Describe your feedback in detail..."
              className="h-32"
            />
          </div>

          <Button className="bg-emerald-600 hover:bg-emerald-700">
            Submit Feedback
          </Button>
        </form>
      </Card>
    </div>
  );
}
