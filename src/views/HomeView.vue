<script setup>
import { useHead } from '@unhead/vue'

import TheHeader from '@/components/TheHeader.vue'
import TheHero from '@/components/TheHero.vue'
import TheAboutUs from '@/components/TheAboutUs.vue'
import TheOurTeam from '@/components/TheOurTeam.vue'
import TheOurServices from '@/components/TheOurServices.vue'
import TheOurWork from '@/components/TheOurWork.vue'
import TheQuestions from '@/components/TheQuestions.vue'
import TheOurClients from '@/components/TheOurClients.vue'
import TheContactUs from '@/components/TheContactUs.vue'
import TheConsultation from '@/components/TheConsultation.vue'
import TheFooter from '@/components/TheFooter.vue'

useHead({
  title: 'United Legal Alliance',
  meta: [
    {
      name: 'description',
      content:
        'Serving your immigration needs, Qualified assistance in preparing documents for successful immigration to the USA. There for our clients whenever they need us'
    },
    { name: 'robots', content: 'index, follow' },
    { name: 'x-robots-tag', content: 'index, follow' },
    { property: 'og:site_name', content: 'United Legal Alliance by Byteoff' },
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: 'Serving your immigration needs' },
    { property: 'og:image', content: 'https://visa-pro-us-ssg.vercel.app/OurServices/3.jpg' },
    { property: 'og:url', content: 'https://visa-pro-us-ssg.vercel.app/' },
    {
      property: 'og:description',
      content: 'Qualified assistance in preparing documents for successful immigration to the USA.'
    }
  ]
})
</script>

<template>
  <TheHeader />
  <main>
    <TheHero />
    <TheAboutUs />
    <TheOurTeam />
    <TheOurServices />
    <TheOurWork />
    <TheQuestions />
    <TheOurClients />
    <TheContactUs />
    <TheConsultation />
  </main>
  <TheFooter />
</template>
