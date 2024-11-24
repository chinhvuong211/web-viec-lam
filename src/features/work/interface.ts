export interface ProjectItem {
    id: string;
    slug?: string;
    imageUrl?: string;
    name?: string;
    technologies?: string[];
    description?: string;
    title?: string;
    startTime?: string;
    service?: string;
    client?: string;
    projectImages?: string[];
    role?: string;
    stats?: {
        title: string;
        value: string;
        percentage: string;
    }[];
    done?: string[];
    result?: string;
    goals?: string[];
    field?: string;
    brief?: string;
}
