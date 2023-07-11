import '@src/styles/global.css';

import SideNavBar from '@src/components/SideNavBar/Nav';
import TopBar from '@src/components/TopBar/TopBar';

export const metadata = {
    title: "Minecraft",
    description: "Dashboard for a mc server"
};

const styles = {
    app_container: 'flex flex-col w-screen h-screen overflow-hidden',
    main_container: 'flex flex-row w-full h-full'
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
        <body>
            <main className={styles.app_container}>
                <TopBar/>
                <div className={styles.main_container}>
                  <SideNavBar/>
                  {children}
                </div>
            </main>
        </body>
    </html>
  )
}

export default RootLayout;