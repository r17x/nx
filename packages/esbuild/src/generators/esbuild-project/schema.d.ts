export interface EsBuildProjectSchema {
  project: string;
  main?: string;
  tsConfig?: string;
  devServer?: boolean;
  skipFormat?: boolean;
  skipPackageJson?: boolean;
  importPath?: string;
  esbuildConfig?: string;
}
