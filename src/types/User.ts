export interface User {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  username: string;
  role: string;
  status: string;
  department: string;
  joinedAt: Date;
  lastActive: Date;
  emailVerified: boolean;
  twoFactorEnabled: boolean;
  location: string;
  language: string;
  timezone: string;
  managerId: string;
  avatarUrl: string;
  dateOfBirth: Date;
  jobTitle: string;
  bio: string;
}