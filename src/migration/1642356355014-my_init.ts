import {MigrationInterface, QueryRunner} from "typeorm";

export class myInit1642356355014 implements MigrationInterface {
    name = 'myInit1642356355014'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "isActive" boolean NOT NULL DEFAULT true, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "saved_pass" ("id" SERIAL NOT NULL, "domain" character varying NOT NULL, "login" character varying NOT NULL, "password" character varying NOT NULL, "ownerId" integer, CONSTRAINT "PK_4f5c7a4f5db1e72043a9bc8b91e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "saved_pass" ADD CONSTRAINT "FK_16a427abb9b503bab6e5e6b9fd0" FOREIGN KEY ("ownerId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "saved_pass" DROP CONSTRAINT "FK_16a427abb9b503bab6e5e6b9fd0"`);
        await queryRunner.query(`DROP TABLE "saved_pass"`);
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
