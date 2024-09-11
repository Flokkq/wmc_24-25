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
          };

         env = {
            # PATH="$PATH:/nix/store/zb3r7v84r6g9blphgpqq4xd5pcpz4vr3-typescript-language-server-4.3.3/bin/typescript-language-server";
          }; 
        }
    );
}
