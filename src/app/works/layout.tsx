import type { ReactNode } from 'react'

function WorksLayout({ children, modal }: { children: ReactNode, modal: ReactNode }) {
  return (
    <>
      {children}
      {modal}
    </>
  )
}

export default WorksLayout
