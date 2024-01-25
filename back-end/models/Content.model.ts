import {
  Column,
  Model,
  DataType,
  Table,
  BelongsTo,
} from "sequelize-typescript";

import User from "./User.model";
import { ContentStatus } from "../enums/ContentStatus.enum";

@Table({ modelName: "content", timestamps: false })
export default class Content extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    field: "id",
    autoIncrement: true,
  })
  declare id: number;

  @Column({ type: DataType.STRING, field: "url" })
  declare url: string;

  @Column({
    type: DataType.STRING,
    field: "status",
    defaultValue: ContentStatus.PENDING,
  })
  declare status: ContentStatus;

  @Column({
    type: DataType.INTEGER,
    field: "userId",
  })
  declare userId: number;

  // Relations
  @BelongsTo(() => User, "userId")
  declare user: User;
}
