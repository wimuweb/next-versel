
import { ReactNode } from 'react';
import styles from "./DarkLayout.module.css";

type Props = {
  children: ReactNode
}
export const DarkLayout = ({children}: Props) => {


  
  return (
    <div className={styles.darmode}>
      <h3>Dark-Layout</h3>
      <div>
        {children}
      </div>
    </div>
  )
}
