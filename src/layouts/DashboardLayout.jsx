import React from 'react'

export default function DashboardLayout({children}) {
  return (
    <div>
      <aside>
        <nav>
          <ul>
            <li>home</li>
          </ul>
        </nav>
      </aside>
      <div>
        <main>
          {children}
        </main>
      </div>
    </div>
  )
}
