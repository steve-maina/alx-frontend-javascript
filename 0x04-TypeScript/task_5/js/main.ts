// task_5/js/main.ts

// Define MajorCredits interface with a unique brand
export interface MajorCredits {
  credits: number;
  brand: "major";
}

// Define MinorCredits interface with a unique brand
export interface MinorCredits {
  credits: number;
  brand: "minor";
}

// sumMajorCredits takes two MajorCredits and returns their sum as MajorCredits
export function sumMajorCredits(
  subject1: MajorCredits,
  subject2: MajorCredits
): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: "major",
  };
}

// sumMinorCredits takes two MinorCredits and returns their sum as MinorCredits
export function sumMinorCredits(
  subject1: MinorCredits,
  subject2: MinorCredits
): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: "minor",
  };
}
