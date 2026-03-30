import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

export const flourish = (scrpt, nodeData, myRef) => {
  // 1. Mandatory Reset: Flourish sets this to true once finished;
  // you MUST nullify it to allow any further scanning.
  window.FlourishLoaded = null;

  const initFlourish = () => {
    // Find the placeholder in your component's fresh HTML
    const embedElement = myRef.current?.querySelector('.flourish-embed');

    // 2. Manually call loadEmbed on the specific element
    if (
      embedElement &&
      window.Flourish &&
      typeof window.Flourish.loadEmbed === 'function'
    ) {
      try {
        window.Flourish.loadEmbed(embedElement);
      } catch (err) {
        console.error('Flourish loadEmbed failed:', err);
      }
    }
  };

  // 3. Handle existing script vs first load
  if (window.Flourish && window.Flourish.loadEmbed) {
    // Use a timeout to ensure React's DOM update is fully painted before targeting
    setTimeout(initFlourish, 200);
  } else {
    const existingScript = document.querySelector(
      'script[src*="flourish.studio/resources/embed.js"]'
    );

    // If script is missing entirely, append it
    if (!existingScript) {
      const script = document.createElement('script');
      script.src =
        scrpt.src || 'https://public.flourish.studio/resources/embed.js';
      script.async = true;
      script.onload = initFlourish;
      document.body.appendChild(script);
    } else {
      // Script exists in DOM but window.Flourish is not available
      // This can happen after XHR navigation - need to reload the script
      existingScript.remove();

      const script = document.createElement('script');
      script.src =
        scrpt.src || 'https://public.flourish.studio/resources/embed.js';
      script.async = true;
      script.onload = initFlourish;
      document.body.appendChild(script);
    }
  }
};

export const FlourishEmbed = ({ htmlContent }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    // 1. Mandatory Reset: Flourish sets this to true once finished;
    // you MUST nullify it to allow any further scanning.
    window.FlourishLoaded = null;

    const initFlourish = () => {
      // Find the placeholder in your component's fresh HTML
      const embedElement = containerRef.current?.querySelector(
        '.flourish-embed'
      );

      // 2. Manually call loadEmbed on the specific element
      if (
        embedElement &&
        window.Flourish &&
        typeof window.Flourish.loadEmbed === 'function'
      ) {
        try {
          window.Flourish.loadEmbed(embedElement);
        } catch (err) {
          console.error('Flourish loadEmbed failed:', err);
        }
      }
    };

    // 3. Handle existing script vs first load
    if (window.Flourish && window.Flourish.loadEmbed) {
      // Use a timeout to ensure React's DOM update is fully painted before targeting
      const timer = setTimeout(initFlourish, 200);
      return () => clearTimeout(timer);
    } else {
      // If script is missing entirely, append it
      if (
        !document.querySelector(
          'script[src*="flourish.studio/resources/embed.js"]'
        )
      ) {
        const script = document.createElement('script');
        script.src = 'https://public.flourish.studio/resources/embed.js';
        script.async = true;
        script.onload = initFlourish;
        document.body.appendChild(script);
      }
    }
  }, [htmlContent]); // Re-run when navigation/XHR content changes

  return (
    <div
      ref={containerRef}
      className="flourish-wrapper"
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
};

FlourishEmbed.propTypes = {
  htmlContent: PropTypes.string.isRequired
};
