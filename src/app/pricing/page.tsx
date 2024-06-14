import React from 'react'
import Pricing from '@/components/pricing/Pricing'
import Faqs from '@/components/faq/Faqs'
import Cta from '@/components/cta/Cta'

const page = () => {
  return (
    <div>
      <Pricing />
      <Faqs />
      <Cta />
    </div>
  )
}

export default page