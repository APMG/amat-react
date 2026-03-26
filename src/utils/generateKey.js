/**
 * Generates a deterministic key for React components during SSR
 * to avoid hydration mismatches caused by random UUIDs.
 *
 * @param {object} node - The node data object
 * @param {number} index - The index in the parent array
 * @returns {string} A stable, deterministic key
 */
const generateKey = (node, index) => {
  // Prefer index as it's the most stable identifier
  if (typeof index === 'number') {
    return `node-${index}`;
  }

  // Fallback to node type + attrs if available
  if (node?.type) {
    // For nodes with IDs (like images, embeds), use them
    if (node.attrs?.id) {
      return `${node.type}-${node.attrs.id}`;
    }

    // For text nodes, use a simple hash of content
    if (node.text) {
      return `${node.type}-${simpleHash(node.text)}`;
    }

    // Default: use type + index or 0
    return `${node.type}-${index || 0}`;
  }

  // Last resort: use index or default
  return `node-${index || 0}`;
};

/**
 * Simple hash function for generating consistent keys from strings
 * Based on Java's String.hashCode() algorithm
 *
 * @param {string} str - String to hash
 * @returns {number} Hash code
 */
const simpleHash = (str) => {
  let hash = 0;
  if (!str || str.length === 0) return hash;

  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash; // Convert to 32-bit integer
  }

  return Math.abs(hash);
};

export default generateKey;
