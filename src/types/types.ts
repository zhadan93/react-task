export type IconProps = {
  className?: string;
};

export interface TopicData {
  id: number;
  title: string;
  description: string;
  tags: string[];
  tasks: {
    total: number;
    complete: number;
  };
}
