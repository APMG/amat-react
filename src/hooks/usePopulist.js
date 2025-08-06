// hooks/usePopulistEmbed.js
import { useEffect } from 'react';

const usePopulistEmbed = (htmlNode, embedId, isPopulistScriptLoaded) => {
  useEffect(() => {
    if (!htmlNode || !embedId || !isPopulistScriptLoaded) {
      return;
    }

    // Check for the Populist initialization function.
    if (typeof window.populistEmbedInit === 'function') {
      // console.log(`Initializing Populist embed for ID: ${embedId}`);
      window.populistEmbedInit();
    } else {
      console.error('populistEmbedInit not found on window object.');
    }
  }, [htmlNode, embedId, isPopulistScriptLoaded]);
};

export default usePopulistEmbed;
