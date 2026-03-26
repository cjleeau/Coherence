import StyleDictionary from 'style-dictionary'

const base = new StyleDictionary({
  source: ['src/base/**/*.json', 'src/semantic/**/*.json'],
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

const light = new StyleDictionary({
  source: ['src/base/**/*.json', 'src/themes/light.json'],
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: 'dist/',
      files: [
        {
          destination: 'theme-light.css',
          format: 'css/variables',
          options: {
            selector: ':root'
          }
        }
      ]
    }
  }
})

const dark = new StyleDictionary({
  source: ['src/base/**/*.json', 'src/themes/dark.json'],
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: 'dist/',
      files: [
        {
          destination: 'theme-dark.css',
          format: 'css/variables',
          options: {
            selector: '[data-theme="dark"]'
          }
        }
      ]
    }
  }
})

await base.buildAllPlatforms()
await light.buildAllPlatforms()
await dark.buildAllPlatforms()

console.log('Coherence tokens built.')