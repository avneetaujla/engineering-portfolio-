import { Hero } from '@/components/home/Hero'
import { SelectedWork } from '@/components/home/SelectedWork'
import { ExperiencePreview } from '@/components/home/ExperiencePreview'
import { Capabilities } from '@/components/home/Capabilities'
import { AboutPreview } from '@/components/home/AboutPreview'
import { CTA } from '@/components/home/CTA'

export function HomePage() {
  return (
    <>
      <Hero />
      <ExperiencePreview />
      <SelectedWork />
      <Capabilities />
      <AboutPreview />
      <CTA />
    </>
  )
}
