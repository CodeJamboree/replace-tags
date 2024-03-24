const appendPath = (prefix: string|undefined, segment: string) => 
  prefix ? `${prefix}.${segment}` : segment;

export default appendPath;