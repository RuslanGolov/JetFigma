'use client'

import * as React from 'react'
import { Card } from '@/components/ui/card'

export default function Features() {
  return (
    <section>
      <div className="bg-muted/50 py-24">
        <div className="mx-auto w-full max-w-5xl px-6">
          <div className="border-foreground/10 relative grid gap-12 border-b pb-12 [--radius:1rem] md:grid-cols-2">
            <div>
              <h3 className="text-foreground text-xl font-semibold">Marketing Campaigns</h3>
              <p className="text-muted-foreground my-4 text-lg">
                Effortlessly plan and execute your marketing campaigns organized.
              </p>
              <Card className="aspect-video overflow-hidden px-6 bg-white">
                <Card className="h-full translate-y-6 bg-white" />
              </Card>
            </div>
            <div>
              <h3 className="text-foreground text-xl font-semibold">Generate UI that already fits</h3>
              <p className="text-muted-foreground my-4 text-lg">
                Fewer rewrites. Fewer handoffs. UI that scales with your project.
              </p>
              <Card className="aspect-video overflow-hidden">
                <Card className="translate-6 h-full" />
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
