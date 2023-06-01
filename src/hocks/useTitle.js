import React, { useEffect } from 'react';

const useTitle = (title) => {
   useEffect(()=>{
    document.title=`Green Tree,Green World/${title}`
   },[title])

};

export default useTitle;