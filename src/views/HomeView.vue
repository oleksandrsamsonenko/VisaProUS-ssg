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
      name: 'United Legal Alliance',
      content:
        'Serving your immigration needs, Qualified assistance in preparing documents for successful immigration to the USA. There for our clients whenever they need us'
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
