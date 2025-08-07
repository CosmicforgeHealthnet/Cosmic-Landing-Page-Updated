import React from 'react';

const FeatureCard = ({ 
  title, 
  subtitle, 
  backgroundImage, 
  backgroundColor = "bg-gradient-to-br from-purple-100 via-blue-50 to-green-100",
  titleColor = "text-gray-900",
  subtitleColor = "text-gray-600",
  className = "",
  children,
  height = "h-[600px]",
  width = "w-full max-w-4xl"
}) => {
  return (
    <div 
      className={`${width} ${height} rounded-3xl p-8 relative overflow-hidden ${backgroundColor} ${className}`}
      style={backgroundImage ? { 
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      } : {}}
    >
      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Main Content Area - Children go here */}
        <div className="flex-1 mb-8">
          {children}
        </div>
        
        {/* Bottom Text Section */}
        <div className="space-y-4">
          <h2 className={`text-4xl lg:text-5xl font-bold leading-tight ${titleColor}`}>
            {title}
          </h2>
          {subtitle && (
            <p className={`text-lg lg:text-xl leading-relaxed max-w-2xl ${subtitleColor}`}>
              {subtitle}
            </p>
          )}
        </div>
      </div>
      
      {/* Optional overlay for better text readability */}
      {backgroundImage && (
        <div className="absolute inset-0 bg-white/20 backdrop-blur-[1px]"></div>
      )}
    </div>
  );
};

// Example usage components
const FeatureCardExamples = () => {
  // Mock dashboard content
  const DashboardContent = () => (
    <div className="h-full bg-white rounded-2xl shadow-xl p-6 border border-gray-200">
      {/* Header Stats */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex space-x-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900">50</div>
            <div className="text-sm text-gray-500">Total Schedules</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900">13</div>
            <div className="text-sm text-gray-500">Request Rejections</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900">2</div>
            <div className="text-sm text-gray-500">Upcoming</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900">2</div>
            <div className="text-sm text-gray-500">Upcoming</div>
          </div>
        </div>
      </div>

      {/* Calendar Section */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Current Schedules May, 2025</h3>
        <div className="grid grid-cols-7 gap-2 text-center">
          {['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU'].map((day, index) => (
            <div key={day} className="p-2">
              <div className="text-xs text-gray-500 mb-1">{day}</div>
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm ${
                index === 3 ? 'bg-blue-600 text-white' : 'text-gray-700'
              }`}>
                {9 + index}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Doctors Section */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Explore Doctors</h3>
        <div className="grid grid-cols-2 gap-4">
          {[1, 2].map((doctor) => (
            <div key={doctor} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
              <div className="w-12 h-12 bg-blue-200 rounded-full"></div>
              <div className="flex-1">
                <div className="font-medium text-gray-900">Esther Doe, M.S</div>
                <div className="text-sm text-gray-500">Cardiologist</div>
                <div className="text-xs text-gray-400">Appointments: 100 - 200pm</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Specializations */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Browse By Specialization</h3>
        <div className="flex space-x-4">
          {['Cardiologist', 'Dentist', 'Neurologist', 'Psychologist', 'Orthopedic'].map((spec) => (
            <div key={spec} className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full mb-2 flex items-center justify-center">
                <div className="w-6 h-6 bg-blue-600 rounded"></div>
              </div>
              <div className="text-xs text-gray-600">{spec}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-12 p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8">Feature Card Examples</h1>
      
      {/* Healthcare Dashboard Example */}
      <FeatureCard
        title="Unified Healthcare Hub"
        subtitle="A unified platform connecting doctors, patients, labs, and pharmacies seamlessly"
        backgroundColor="bg-gradient-to-br from-purple-100 via-blue-50 to-green-100"
        height="h-[700px]"
      >
        <DashboardContent />
      </FeatureCard>

      {/* Simple Feature Card */}
      <FeatureCard
        title="Advanced Analytics"
        subtitle="Get insights into your healthcare journey with detailed analytics and reports"
        backgroundColor="bg-gradient-to-br from-blue-100 to-purple-100"
        height="h-[400px]"
      >
        <div className="h-full bg-white rounded-2xl shadow-lg p-6 flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl mb-4">📊</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Analytics Dashboard</h3>
            <p className="text-gray-600">Track your health metrics and trends</p>
          </div>
        </div>
      </FeatureCard>

      {/* Telemedicine Feature */}
      <FeatureCard
        title="24/7 Telemedicine"
        subtitle="Connect with healthcare professionals anytime, anywhere through video consultations"
        backgroundColor="bg-gradient-to-br from-green-100 to-blue-100"
        height="h-[500px]"
      >
        <div className="h-full bg-white rounded-2xl shadow-lg p-6">
          <div className="grid grid-cols-2 gap-4 h-full">
            <div className="bg-gray-100 rounded-xl p-4 flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl mb-2">👨‍⚕️</div>
                <div className="text-lg font-semibold">Doctor</div>
              </div>
            </div>
            <div className="bg-gray-100 rounded-xl p-4 flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl mb-2">🧑‍💼</div>
                <div className="text-lg font-semibold">Patient</div>
              </div>
            </div>
          </div>
        </div>
      </FeatureCard>

      {/* AI-Powered Feature */}
      <FeatureCard
        title="AI-Powered Diagnostics"
        subtitle="Leverage artificial intelligence for accurate preliminary health assessments"
        backgroundColor="bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100"
        height="h-[450px]"
        titleColor="text-purple-900"
        subtitleColor="text-purple-700"
      >
        <div className="h-full bg-white rounded-2xl shadow-lg p-6 flex items-center justify-center">
          <div className="grid grid-cols-3 gap-6">
            {['🧠', '⚡', '🔬'].map((emoji, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl mb-3">{emoji}</div>
                <div className="text-sm font-medium text-gray-700">
                  {['Smart Analysis', 'Quick Results', 'Lab Integration'][index]}
                </div>
              </div>
            ))}
          </div>
        </div>
      </FeatureCard>
    </div>
  );
};

export default FeatureCard;
export { FeatureCardExamples };