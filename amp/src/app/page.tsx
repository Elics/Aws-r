import Image from 'next/image'
import {ThemeProvider} from "@aws-amplify/ui-react";
import { Amplify } from 'aws-amplify';
import awsconfig from '@/aws-exports';
import "@aws-amplify/ui-react/styles.css";
import studioTheme from '@/ui-components/studioTheme';
Amplify.configure(awsconfig);


export default function Home() {
    
    return (  
        <ThemeProvider theme={studioTheme}>
        
   
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <article>
                <h1>My First Component</h1>
                <ol>
                    <li>Components: UI Building Blocks</li>
                    <li>Defining a Component</li>
                    <li>Using a Component</li>
                </ol>
            </article>
</main>
   </ThemeProvider>
)
}

