export const imageLoader = (src: string) => {
  return `${src}?w=1200&q=75&auto=format`
}

export const generateBlurDataUrl = async (src: string) => {
  // Implement blur hash or simple placeholder
  return `data:image/svg+xml;base64,...`
} 