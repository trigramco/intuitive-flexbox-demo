import { HBox, VBox } from 'intuitive-flexbox'
import * as React from 'react'

import Layout from '@/components/layout/Layout'
import Seo from '@/components/Seo'

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />
      <VBox className='h-screen bg-black py-10 text-white'>
        <h1 className='mb-2'>This is a VBox</h1>
        <HBox className='bg-blue-500 bg-opacity-50 py-2'>
          This is an HBox
          <div className='mx-2 bg-red-500 px-2'>with</div>
          <div className='mx-2 bg-green-500 px-2'>multiple items</div>
        </HBox>
        <HBox className='bg-yellow-500 bg-opacity-50'>This another HBox</HBox>
      </VBox>
      <main>
        <section className='bg-white'>
          <div className='layout relative flex min-h-screen flex-col items-center justify-center py-12 text-center'></div>
        </section>
      </main>
    </Layout>
  )
}
