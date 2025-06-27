{ pkgs }: {
  deps = [
    pkgs.nodejs
    pkgs.python311
    pkgs.sqlite
    pkgs.python311Packages.flask
    pkgs.python311Packages.flask_sqlalchemy
    pkgs.python311Packages.flask_cors
  ];
}
