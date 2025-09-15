export const formatPrice = (price, currency, discountPercentage) => {
  if (price === 0 && discountPercentage != 100) return "Free";
  if (currency === "USD") {
    return `$${price}`;
  } else {
    return `₦${price.toLocaleString()}`;
  }
};

export const getDescription = (plan) => {
  if (plan.id === "free")
    return "Suitable to see how the cosmic platform works with limited abilities";
  if (plan.id === "basic")
    return "Perfect for individuals who need basic healthcare access";
  if (plan.id === "standard")
    return "Great for those who want comprehensive consultations";
  if (plan.id === "medium")
    return "Ideal for small families with regular healthcare needs";
  if (plan.id === "premium")
    return "Perfect for larger families requiring unlimited access";
  if (plan.id === "gold_elite")
    return "Ultimate plan with exclusive features and unlimited access";
  return "Complete healthcare solution for your needs";
};

export const isPopularPlan = (planId) => {
  return planId === "standard" || planId === "medium";
};
