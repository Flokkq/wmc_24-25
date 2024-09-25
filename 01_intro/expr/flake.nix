{
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils, ... }: 
    flake-utils.lib.eachDefaultSystem(system: 
      let 
        pkgs = import nixpkgs { 
          inherit system; 
        }; 
      in 
        { 
          devShells.default = pkgs.mkShell { 
            nativeBuildInputs = [
              pkgs.nodejs_20
              pkgs.biome
              pkgs.nodePackages.pnpm
              pkgs.nodePackages.typescript
              pkgs.nodePackages.typescript-language-server
            ];

            shellHook = ''
              if [ ! -f "./node_modules/.bin/express" ]; then
                echo "express-generator not found. Installing locally..."
                npm install express-generator
              else
                echo "express-generator already installed. Skipping."
              fi

              export PATH="$PWD/node_modules/.bin:$PATH"
            '';
          };
        }
    );
}
