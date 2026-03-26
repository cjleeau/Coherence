import StyleDictionary from 'style-dictionary'

const sd = new StyleDictionary({
  source: ['src/**/*.json'],
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: 'dist/',
      files: [
        {
          destination: 'tokens.css',
          format: 'css/variables'
        }
      ]
    }
  }
})

await sd.buildAllPlatforms()

console.log('Coherence tokens built.')