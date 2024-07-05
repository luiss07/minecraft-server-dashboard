import React, { ReactNode } from 'react';
import '@src/styles/globals.css';
import { ServerStatusProvider } from '@src/context/serverStatus.context';
import SideNavBar from '@src/components/sideNavBar/nav';
import TopBar from '@src/components/topBar/topBar';

interface RootLayoutProps {
    children: ReactNode;
}

const styles = {
    app_container: 'flex flex-col min-h-screen text-left overflow-hidden',
    main_container: 'flex flex-1 flex-row pt-14 min-h-screen'
};

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
    return (
        <html lang="en">
            <body>
                <main className='block'>
                    <div className={styles.app_container}>
                        <ServerStatusProvider>
                            <TopBar />
                            <div className={styles.main_container}>
                                <SideNavBar />
                                {children}
                            </div>
                        </ServerStatusProvider>
                    </div>
                </main>
            </body>
        </html>
    );
}

export default RootLayout;
