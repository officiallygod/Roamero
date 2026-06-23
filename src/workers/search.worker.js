import Fuse from 'fuse.js';

let fuseInstance = null;

// Handle messages from the main thread
self.onmessage = (event) => {
  const { type, payload } = event.data;

  if (type === 'INIT') {
    // Initialize Fuse with the provided data
    const { items, options } = payload;
    
    // Web workers handle initialization heavily optimized without blocking main thread
    fuseInstance = new Fuse(items, options);
    
    self.postMessage({ type: 'INIT_DONE' });
  } 
  else if (type === 'SEARCH') {
    if (!fuseInstance) {
      console.warn('Search worker received search request before initialization.');
      self.postMessage({ type: 'SEARCH_RESULTS', payload: { query: payload.query, results: [] } });
      return;
    }

    // Execute the search
    const results = fuseInstance.search(payload.query);
    
    // Send results back to main thread
    self.postMessage({ 
      type: 'SEARCH_RESULTS', 
      payload: { 
        query: payload.query, 
        results 
      } 
    });
  }
};
