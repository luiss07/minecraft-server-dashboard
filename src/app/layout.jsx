import '@src/styles/global.css';

import NavBar from '@src/components/SideNavBar';
// import Topbar from '@src/components/Topbar';

export const metadata = {
    title: "Minecraft",
    description: "Dashboard for a mc server"
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
        <body>
            <main className='app_layout'>
                {/* <Topbar/> */}
                <NavBar/>
                {children}
            </main>
        </body>
    </html>
  )
}

export default RootLayout;