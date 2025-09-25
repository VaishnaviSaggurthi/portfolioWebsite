const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting deployment process...\n');

// Build the project
console.log('📦 Building the project...');
try {
  execSync('npm run build', { stdio: 'inherit' });
  console.log('✅ Build completed successfully!\n');
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}

// Export static files
console.log('📤 Exporting static files...');
try {
  execSync('npm run export', { stdio: 'inherit' });
  console.log('✅ Export completed successfully!\n');
} catch (error) {
  console.error('❌ Export failed:', error.message);
  process.exit(1);
}

// Create deployment info
const deploymentInfo = {
  timestamp: new Date().toISOString(),
  version: require('./package.json').version,
  buildHash: Math.random().toString(36).substring(7),
  pages: ['/', '/about', '/skills', '/projects', '/contact']
};

fs.writeFileSync(
  path.join(__dirname, 'out', 'deployment-info.json'),
  JSON.stringify(deploymentInfo, null, 2)
);

console.log('🎉 Deployment ready!');
console.log('📁 Static files are in the "out" directory');
console.log('🌐 You can now deploy to:');
console.log('   • Vercel: vercel --prod');
console.log('   • Netlify: drag "out" folder to netlify.com/drop');
console.log('   • GitHub Pages: push "out" contents to gh-pages branch');
console.log('   • Any static hosting service\n');

console.log('🔗 Deployment Info:');
console.log(`   • Timestamp: ${deploymentInfo.timestamp}`);
console.log(`   • Build Hash: ${deploymentInfo.buildHash}`);
console.log(`   • Pages: ${deploymentInfo.pages.join(', ')}`);