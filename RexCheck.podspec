
  Pod::Spec.new do |s|
    s.name = 'RexCheck'
    s.version = '0.0.1'
    s.summary = 'check'
    s.license = 'MIT'
    s.homepage = 'https://github.com/chunta/RexCheck.git'
    s.author = 'rex'
    s.source = { :git => 'https://github.com/chunta/RexCheck.git', :tag => s.version.to_s }
    s.source_files = 'ios/Plugin/**/*.{swift,h,m,c,cc,mm,cpp}'
    s.ios.deployment_target  = '11.0'
    s.dependency 'Capacitor'
  end