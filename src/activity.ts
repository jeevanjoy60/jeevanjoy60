type ActivityRecord = {
  language: string;
  count: number;
};

function recordActivity(count: number): ActivityRecord {
  return { language: "TypeScript", count };
}

console.log(recordActivity(2));

// Activity 2
