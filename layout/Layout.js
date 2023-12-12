import Head from 'next/head'
import Sidebar from '../components/Sidebar'

export function Layout({ children, page='Init' }) {
  return (
    <>
      <Head>
        <title>{`Quiosco/${page}`}</title>
        <meta name='description' content='Quiosco' />
      </Head>
      <div className='md:flex m-5'>
        <aside className='md:w-4/12 xl:w-1/4 2xl:w-1/5'>
          <Sidebar />
        </aside>
        <main className='md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll'>
          <div className='p-10'>{children}</div>
        </main>
      </div>
    </>
  )
}