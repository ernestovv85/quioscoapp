import Head from 'next/head'
import Modal from 'react-modal'
import Sidebar from '../components/Sidebar'
import { useQuiosco } from '../hooks/useQuiosco'
import { ModalProduct } from '../components/ModalProduct'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
}

Modal.setAppElement('#__next')

export function Layout({ children, page = 'Init' }) {
  const { modal } = useQuiosco()
  return (
    <>
      <Head>
        <title>{`Quiosco/${page}`}</title>
        <meta name='description' content='Quiosco' />
      </Head>
      <div className='md:flex m-2'>
        <aside className='md:w-4/12 xl:w-1/4 2xl:w-1/5'>
          <Sidebar />
        </aside>
        <main className='md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll'>
          <div className='p-10'>{children}</div>
        </main>
      </div>
      {modal && (
        <Modal isOpen={modal} style={customStyles}>
          <ModalProduct/>
        </Modal>
      )}
    </>
  )
}
